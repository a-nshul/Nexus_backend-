function generateEmailTemplate(eventTitle, eventDate, eventDescription) {
  return `
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600&display=swap" rel="stylesheet">
        <style>
          body {
            font-family: 'Oswald', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
          h1 {
            font-size: 24px;
            color: #4CAF50;
          }
          p {
            font-size: 16px;
            line-height: 1.5;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
          }
          .button:hover {
            background-color: #45a049;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${eventTitle}</h1>
          <p>Date: ${eventDate}</p>
          <p>${eventDescription}</p>
          <a href="http://localhost:3003/register" class="button">Register Now</a>
        </div>
      </body>
    </html>
  `;
}

module.exports = generateEmailTemplate;
