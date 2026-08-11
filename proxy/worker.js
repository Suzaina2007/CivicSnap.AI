export default {
  async fetch(request, env) {
    const webhookUrl = env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
      return new Response("MAKE_WEBHOOK_URL is not configured", {
        status: 500
      });
    }

    // Allow browser/frontend preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "*"
        }
      });
    }

    // We only accept POST
    if (request.method !== "POST") {
      return new Response("Use POST", {
        status: 405,
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
    }

    try {
      // Preserve the original Content-Type.
      // This is critical for multipart/form-data and images.
      const headers = new Headers();

      const contentType = request.headers.get("Content-Type");

      if (contentType) {
        headers.set("Content-Type", contentType);
      }

      // Forward the original request body unchanged.
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: headers,
        body: request.body
      });

      const result = await response.text();

      return new Response(result, {
        status: response.status,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type":
            response.headers.get("Content-Type") || "text/plain"
        }
      });

    } catch (error) {
      return new Response(
        JSON.stringify({
          success: false,
          error: error.message
        }),
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      );
    }
  }
};
