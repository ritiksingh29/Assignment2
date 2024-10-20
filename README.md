# Assignment2
API Integration:
The fetch_weather function retrieves weather data for a city from OpenWeatherMap API, converts temperatures from Kelvin to Celsius, and returns a dictionary containing weather information.
Database Setup:
A SQLite database is used to store weather data and daily summaries. Two tables (weather_data and weather_summary) are created for storing raw data and daily rollups, respectively.
Real-Time Data Monitoring:
The system fetches weather data for all cities every 5 minutes (CHECK_INTERVAL = 300 seconds), stores it in the database, and checks if any city's temperature exceeds the threshold (35°C for two consecutive updates). If it does, an alert is printed on the console.
Daily Weather Summary:
At the end of each day, the system aggregates the data to calculate average, maximum, and minimum temperatures, as well as the dominant weather condition for each city.
Temperature Trend Visualization:
The plot_temperature_trends function generates a graph showing daily average temperatures for a given city, using matplotlib.
How to Use:
Install Dependencies:
bash
Copy code
pip install requests matplotlib
API Key: 

Replace "your_api_key" with your OpenWeatherMap API key.
Run the Program:
To continuously monitor weather data, uncomment the line fetch_all_cities_weather(). This will start the real-time data fetching and alerting system.
To visualize the temperature trends, run the program as is and it will generate a graph for Delhi's daily average temperatures.
