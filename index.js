document.addEventListener("DOMContentLoaded", () => {
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
  const username = "coalition";
  const password = "skills-test";
  const headers = new Headers();

  headers.append("Authorization", "Basic " + btoa(username + ":" + password));

  fetch(url, { method: "GET", headers: headers })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Assuming the data has blood pressure readings in a format similar to this:
      chartData = {
        systolic: [150, 170, 160, 165, 180, 160],
        diastolic: [80, 75, 85, 78, 70, 78],
        labels: [
          "Oct, 2023",
          "Nov, 2023",
          "Dec, 2023",
          "Jan, 2024",
          "Feb, 2024",
          "Mar, 2024",
        ],
      };

      const labels = chartData.labels || [];
      const systolicData = chartData.systolic || [];
      const diastolicData = chartData.diastolic || [];

      const ctx = document.getElementById("bpChart").getContext("2d");
      const bpChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Systolic",
              data: systolicData,
              borderColor: "#C26EB4",
              fill: false,
              tension: 0.5,
              pointBorderColor: "#C26EB4",
              pointBackgroundColor: "#C26EB4",
            },
            {
              label: "Diastolic",
              data: diastolicData,
              borderColor: "#7E6CAB",
              fill: false,
              tension: 0.5,
              pointBorderColor: "#7E6CAB",
              pointBackgroundColor: "#7E6CAB",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: false,
              min: 60,
              max: 190,
            },
          },
        },
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
