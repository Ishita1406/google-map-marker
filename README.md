# Google Maps Plugin Application

## Overview

This project is a feature-rich application that integrates with the Google Maps API to allow users to manage geographical coordinates efficiently. Users can input coordinates, view them on a map, and access additional details about the location. The app ensures a seamless user experience with a responsive UI.

## Features

1. User Authentication: Secure access using Google Maps API key.

2. Add Coordinates: Users can input latitude and longitude values manually.

3. Interactive Map: Displays markers for the input coordinates on the map.

4. Location Information: Fetches and displays the city and state corresponding to the added coordinates.

5. Pin Locations: Mark specific locations for quick access.

6. Error Handling: Alerts users about missing inputs, invalid coordinates, or unsupported locations outside the United States.

## Installation

### Prerequisites

- Node.js installed on your system.

- Google Maps API Key with access to Geocoding and Maps JavaScript APIs.

### Steps

1. Install dependencies:

```bash
npm install
```

2.Create a .env file in the root directory and add your Google Maps API key:

```bash
VITE_API_KEY=your_google_maps_api_key_here
```

3. Start the development server:

```bash
npm run dev
```
## Usage

### 1. Adding Coordinates:

- Enter latitude and longitude values in the input boxes.

- Click "Add Coordinate" to place a marker on the map.

### 2. Pinning Locations:

- Highlight important locations for easy access.

### 3. Error Handling:

- If the coordinates are missing or invalid, an error message will be displayed.

- Only coordinates within the United States will be processed.

## Flow Logic

### User Authentication:
- Users securely input their API key to access the application.

### Coordinate Management:

- Add new coordinates.

- View them on an interactive map.

### Pin Locations:
- Users can mark locations as important for quick retrieval.

### Real-Time Logs:
- Track all actions, such as adding or editing coordinates.

## API Integration

### Google Maps API

- Geocoding API: Used to fetch location details for the given coordinates.

- Maps JavaScript API: Used to render the map and markers.
