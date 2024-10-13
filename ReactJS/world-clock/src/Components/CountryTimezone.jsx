import React, { useState, useEffect } from 'react';

// Country-Timezone Mapping
const countryTimezones = {
  'Afghanistan': 'Asia/Kabul',
  'Albania': 'Europe/Tirane',
  'Algeria': 'Africa/Algiers',
  'Andorra': 'Europe/Andorra',
  'Angola': 'Africa/Luanda',
  'Antarctica': 'Antarctica/Palmer',
  'Argentina': 'America/Argentina/Buenos_Aires',
  'Armenia': 'Asia/Yerevan',
  'Australia': 'Australia/Sydney',
  'Austria': 'Europe/Vienna',
  'Azerbaijan': 'Asia/Baku',
  'Bahamas': 'America/Nassau',
  'Bahrain': 'Asia/Bahrain',
  'Bangladesh': 'Asia/Dhaka',
  'Barbados': 'America/Barbados',
  'Belarus': 'Europe/Minsk',
  'Belgium': 'Europe/Brussels',
  'Belize': 'America/Belize',
  'Benin': 'Africa/Porto-Novo',
  'Bhutan': 'Asia/Thimphu',
  'Bolivia': 'America/La_Paz',
  'Bosnia and Herzegovina': 'Europe/Sarajevo',
  'Botswana': 'Africa/Gaborone',
  'Brazil': 'America/Sao_Paulo',
  'Brunei': 'Asia/Brunei',
  'Bulgaria': 'Europe/Sofia',
  'Burkina Faso': 'Africa/Ouagadougou',
  'Burundi': 'Africa/Bujumbura',
  'Cambodia': 'Asia/Phnom_Penh',
  'Cameroon': 'Africa/Douala',
  'Canada': 'America/Toronto',
  'Cape Verde': 'Atlantic/Cape_Verde',
  'Central African Republic': 'Africa/Bangui',
  'Chad': 'Africa/Ndjamena',
  'Chile': 'America/Santiago',
  'China': 'Asia/Shanghai',
  'Colombia': 'America/Bogota',
  'Comoros': 'Indian/Comoro',
  'Congo': 'Africa/Brazzaville',
  'Costa Rica': 'America/Costa_Rica',
  'Croatia': 'Europe/Zagreb',
  'Cuba': 'America/Havana',
  'Cyprus': 'Asia/Nicosia',
  'Czech Republic': 'Europe/Prague',
  'Denmark': 'Europe/Copenhagen',
  'Djibouti': 'Africa/Djibouti',
  'Dominican Republic': 'America/Santo_Domingo',
  'East Timor': 'Asia/Dili',
  'Ecuador': 'America/Guayaquil',
  'Egypt': 'Africa/Cairo',
  'El Salvador': 'America/El_Salvador',
  'Estonia': 'Europe/Tallinn',
  'Eswatini': 'Africa/Mbabane',
  'Ethiopia': 'Africa/Addis_Ababa',
  'Fiji': 'Pacific/Fiji',
  'Finland': 'Europe/Helsinki',
  'France': 'Europe/Paris',
  'Gabon': 'Africa/Libreville',
  'Gambia': 'Africa/Banjul',
  'Georgia': 'Asia/Tbilisi',
  'Germany': 'Europe/Berlin',
  'Ghana': 'Africa/Accra',
  'Greece': 'Europe/Athens',
  'Greenland': 'America/Godthab',
  'Guatemala': 'America/Guatemala',
  'Guinea': 'Africa/Conakry',
  'Guyana': 'America/Guyana',
  'Haiti': 'America/Port-au-Prince',
  'Honduras': 'America/Tegucigalpa',
  'Hong Kong': 'Asia/Hong_Kong',
  'Hungary': 'Europe/Budapest',
  'Iceland': 'Atlantic/Reykjavik',
  'India': 'Asia/Kolkata',
  'Indonesia': 'Asia/Jakarta',
  'Iran': 'Asia/Tehran',
  'Iraq': 'Asia/Baghdad',
  'Ireland': 'Europe/Dublin',
  'Israel': 'Asia/Jerusalem',
  'Italy': 'Europe/Rome',
  'Ivory Coast': 'Africa/Abidjan',
  'Jamaica': 'America/Jamaica',
  'Japan': 'Asia/Tokyo',
  'Jordan': 'Asia/Amman',
  'Kazakhstan': 'Asia/Almaty',
  'Kenya': 'Africa/Nairobi',
  'Kiribati': 'Pacific/Tarawa',
  'Kuwait': 'Asia/Kuwait',
  'Kyrgyzstan': 'Asia/Bishkek',
  'Laos': 'Asia/Vientiane',
  'Latvia': 'Europe/Riga',
  'Lebanon': 'Asia/Beirut',
  'Lesotho': 'Africa/Maseru',
  'Liberia': 'Africa/Monrovia',
  'Libya': 'Africa/Tripoli',
  'Liechtenstein': 'Europe/Vaduz',
  'Lithuania': 'Europe/Vilnius',
  'Luxembourg': 'Europe/Luxembourg',
  'Madagascar': 'Indian/Antananarivo',
  'Malawi': 'Africa/Blantyre',
  'Malaysia': 'Asia/Kuala_Lumpur',
  'Maldives': 'Indian/Maldives',
  'Mali': 'Africa/Bamako',
  'Malta': 'Europe/Malta',
  'Marshall Islands': 'Pacific/Majuro',
  'Mauritania': 'Africa/Nouakchott',
  'Mauritius': 'Indian/Mauritius',
  'Mexico': 'America/Mexico_City',
  'Moldova': 'Europe/Chisinau',
  'Monaco': 'Europe/Monaco',
  'Mongolia': 'Asia/Ulaanbaatar',
  'Montenegro': 'Europe/Podgorica',
  'Morocco': 'Africa/Casablanca',
  'Mozambique': 'Africa/Maputo',
  'Myanmar': 'Asia/Yangon',
  'Namibia': 'Africa/Windhoek',
  'Nauru': 'Pacific/Nauru',
  'Nepal': 'Asia/Kathmandu',
  'Netherlands': 'Europe/Amsterdam',
  'New Zealand': 'Pacific/Auckland',
  'Nicaragua': 'America/Managua',
  'Niger': 'Africa/Niamey',
  'Nigeria': 'Africa/Lagos',
  'North Macedonia': 'Europe/Skopje',
  'Norway': 'Europe/Oslo',
  'Oman': 'Asia/Muscat',
  'Pakistan': 'Asia/Karachi',
  'Palestine': 'Asia/Gaza',
  'Panama': 'America/Panama',
  'Papua New Guinea': 'Pacific/Port_Moresby',
  'Paraguay': 'America/Asuncion',
  'Peru': 'America/Lima',
  'Philippines': 'Asia/Manila',
  'Poland': 'Europe/Warsaw',
  'Portugal': 'Europe/Lisbon',
  'Qatar': 'Asia/Qatar',
  'Romania': 'Europe/Bucharest',
  'Russia': 'Europe/Moscow',
  'Rwanda': 'Africa/Kigali',
  'Samoa': 'Pacific/Apia',
  'Saudi Arabia': 'Asia/Riyadh',
  'Senegal': 'Africa/Dakar',
  'Serbia': 'Europe/Belgrade',
  'Seychelles': 'Indian/Mahe',
  'Sierra Leone': 'Africa/Freetown',
  'Singapore': 'Asia/Singapore',
  'Slovakia': 'Europe/Bratislava',
  'Slovenia': 'Europe/Ljubljana',
  'Solomon Islands': 'Pacific/Guadalcanal',
  'Somalia': 'Africa/Mogadishu',
  'South Africa': 'Africa/Johannesburg',
  'South Korea': 'Asia/Seoul',
  'Spain': 'Europe/Madrid',
  'Sri Lanka': 'Asia/Colombo',
  'Sudan': 'Africa/Khartoum',
  'Suriname': 'America/Paramaribo',
  'Sweden': 'Europe/Stockholm',
  'Switzerland': 'Europe/Zurich',
  'Syria': 'Asia/Damascus',
  'Taiwan': 'Asia/Taipei',
  'Tajikistan': 'Asia/Dushanbe',
  'Tanzania': 'Africa/Dar_es_Salaam',
  'Thailand': 'Asia/Bangkok',
  'Togo': 'Africa/Lome',
  'Tonga': 'Pacific/Tongatapu',
  'Trinidad and Tobago': 'America/Port_of_Spain',
  'Tunisia': 'Africa/Tunis',
  'Turkey': 'Europe/Istanbul',
  'Turkmenistan': 'Asia/Ashgabat',
  'Uganda': 'Africa/Kampala',
  'Ukraine': 'Europe/Kiev',
  'United Arab Emirates': 'Asia/Dubai',
  'United Kingdom': 'Europe/London',
  'United States': 'America/New_York',
  'Uruguay': 'America/Montevideo',
  'Uzbekistan': 'Asia/Tashkent',
  'Vanuatu': 'Pacific/Efate',
  'Venezuela': 'America/Caracas',
  'Vietnam': 'Asia/Bangkok',
  'Yemen': 'Asia/Aden',
  'Zambia': 'Africa/Lusaka',
  'Zimbabwe': 'Africa/Harare'
};

const CountrySelection = () => {
  // Default to India
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [localTime, setLocalTime] = useState('');
  const [utcTime, setUtcTime] = useState('');

  // Function to handle the dropdown change
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
  };

  // Function to update time based on selected country
  const updateLocalTime = (timezone) => {
    const currentTime = new Date();

    // Local time for selected country
    const timeInSelectedZone = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(currentTime);
    setLocalTime(timeInSelectedZone);

    // UTC time
    const timeInUtc = currentTime.toUTCString().slice(17, 25); // HH:MM:SS from UTC string
    setUtcTime(timeInUtc);
  };

  // Effect to update time whenever the selected country changes
  useEffect(() => {
    if (selectedCountry) {
      const timezone = countryTimezones[selectedCountry];
      updateLocalTime(timezone);

      // Update time every second to show the live clock
      const intervalId = setInterval(() => updateLocalTime(timezone), 1000);

      // Clean up interval on component unmount or country change
      return () => clearInterval(intervalId);
    }
  }, [selectedCountry]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Select a Country</h2>
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.keys(countryTimezones).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {/* Display local time for selected country */}
      {selectedCountry && (
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="text-lg font-medium text-gray-700">
            Current Time in {selectedCountry}:
          </h3>
          <p className="text-2xl font-bold text-blue-600">{localTime}</p>

          <h3 className="text-lg font-medium text-gray-700 mt-4">
            Current Time in UTC:
          </h3>
          <p className="text-2xl font-bold text-red-600">{utcTime}</p>
        </div>
      )}
    </div>
  );
};

export default CountrySelection;
