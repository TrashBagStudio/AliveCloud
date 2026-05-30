export default {
  async fetch(request) {

    const url = "https://p.ratvad.ru/api/hwid/devices/stats";

    const TOKEN = "ТВОЙ_TOKEN";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
        // cookies добавляются именно так:
        "Cookie": "mJGByXnM=MuMJFoOZ"
      }
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",

        // чтобы GitHub Pages мог читать ответ
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS"
      }
    });
  }
}
