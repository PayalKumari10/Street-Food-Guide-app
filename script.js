// Comprehensive dataset of Indian street foods
const streetFoodData = [
    // Mumbai
    { name: "Vada Pav", city: "Mumbai", area: "CST Station", tags: ["spicy", "comfort", "quick", "savory"], reason: "Mumbai's iconic spicy potato snack, loved by all locals" },
    { name: "Pav Bhaji", city: "Mumbai", area: "Juhu Beach", tags: ["spicy", "comfort", "buttery", "filling"], reason: "Rich buttery vegetable curry with soft bread, perfect comfort food" },
    { name: "Bhel Puri", city: "Mumbai", area: "Marine Drive", tags: ["tangy", "crunchy", "light", "refreshing"], reason: "Crispy puffed rice with tangy chutneys, a Mumbai beachside favorite" },
    { name: "Sev Puri", city: "Mumbai", area: "Chowpatty", tags: ["tangy", "spicy", "crunchy"], reason: "Crispy base topped with potatoes, chutneys and sev" },
    { name: "Misal Pav", city: "Mumbai", area: "Dadar", tags: ["spicy", "hot", "filling"], reason: "Spicy sprouts curry that wakes up your taste buds" },
    
    // Delhi
    { name: "Chole Bhature", city: "Delhi", area: "Chandni Chowk", tags: ["spicy", "filling", "comfort", "heavy"], reason: "Fluffy fried bread with spicy chickpea curry, Delhi's breakfast king" },
    { name: "Golgappa", city: "Delhi", area: "Connaught Place", tags: ["tangy", "spicy", "refreshing", "light"], reason: "Crispy shells filled with tangy water, an explosion of flavors" },
    { name: "Aloo Tikki", city: "Delhi", area: "Sarojini Nagar", tags: ["spicy", "savory", "crispy"], reason: "Crispy potato patties with chutneys and yogurt" },
    { name: "Paranthe Wali Gali Paratha", city: "Delhi", area: "Chandni Chowk", tags: ["filling", "comfort", "traditional"], reason: "Stuffed flatbreads from the legendary paratha lane" },
    { name: "Dahi Bhalla", city: "Delhi", area: "Bengali Market", tags: ["tangy", "sweet", "cooling", "refreshing"], reason: "Soft lentil dumplings in creamy yogurt with sweet chutney" },
    
    // Kolkata
    { name: "Puchka", city: "Kolkata", area: "Park Street", tags: ["tangy", "spicy", "refreshing"], reason: "Kolkata's version of golgappa with unique tamarind water" },
    { name: "Kathi Roll", city: "Kolkata", area: "Park Street", tags: ["savory", "filling", "meaty", "comfort"], reason: "Flaky paratha wrapped around spiced meat or paneer" },
    { name: "Jhalmuri", city: "Kolkata", area: "Victoria Memorial", tags: ["tangy", "spicy", "light", "crunchy"], reason: "Puffed rice mixed with mustard oil and spices, quintessentially Bengali" },
    { name: "Ghugni Chaat", city: "Kolkata", area: "College Street", tags: ["spicy", "savory", "filling"], reason: "Yellow peas curry served as street snack" },
    
    // Bangalore
    { name: "Masala Dosa", city: "Bangalore", area: "VV Puram", tags: ["savory", "crispy", "filling", "traditional"], reason: "Crispy rice crepe with spiced potato filling, South Indian classic" },
    { name: "Bisi Bele Bath", city: "Bangalore", area: "Jayanagar", tags: ["comfort", "spicy", "filling"], reason: "One-pot rice and lentil dish with vegetables and spices" },
    { name: "Gobi Manchurian", city: "Bangalore", area: "Brigade Road", tags: ["spicy", "tangy", "indo-chinese"], reason: "Crispy cauliflower in tangy sauce, Indo-Chinese favorite" },
    { name: "Pani Puri", city: "Bangalore", area: "MG Road", tags: ["tangy", "spicy", "refreshing"], reason: "Bangalore's take on the beloved crispy water-filled snack" },
    
    // Hyderabad
    { name: "Irani Chai with Osmania Biscuit", city: "Hyderabad", area: "Charminar", tags: ["sweet", "comfort", "traditional"], reason: "Strong milky tea with salty-sweet biscuits, Hyderabadi tradition" },
    { name: "Lukhmi", city: "Hyderabad", area: "Pathergatti", tags: ["savory", "meaty", "crispy"], reason: "Square-shaped meat pastry, Hyderabad's unique snack" },
    { name: "Mirchi Bajji", city: "Hyderabad", area: "Gachibowli", tags: ["spicy", "hot", "crispy"], reason: "Batter-fried green chillies, for the brave-hearted" },
    { name: "Dosa", city: "Hyderabad", area: "Ameerpet", tags: ["savory", "crispy", "light"], reason: "Thin crispy crepe, available at every corner" },
    
    // Chennai
    { name: "Sundal", city: "Chennai", area: "Marina Beach", tags: ["healthy", "light", "savory"], reason: "Steamed chickpeas with coconut and spices, beach favorite" },
    { name: "Kothu Parotta", city: "Chennai", area: "T Nagar", tags: ["spicy", "filling", "savory"], reason: "Shredded paratha mixed with curry and eggs" },
    { name: "Bajji", city: "Chennai", area: "Besant Nagar", tags: ["crispy", "spicy", "comfort"], reason: "Vegetable fritters perfect for rainy days" },
    { name: "Idli Sambar", city: "Chennai", area: "Mylapore", tags: ["light", "healthy", "traditional"], reason: "Soft steamed rice cakes with lentil soup, breakfast staple" },
    
    // Pune
    { name: "Misal Pav", city: "Pune", area: "FC Road", tags: ["spicy", "hot", "filling"], reason: "Pune's spiciest version of the sprouts curry" },
    { name: "Vada Pav", city: "Pune", area: "Deccan", tags: ["spicy", "comfort", "quick"], reason: "Maharashtra's favorite snack, popular in Pune too" },
    { name: "Mastani", city: "Pune", area: "Swargate", tags: ["sweet", "cold", "rich"], reason: "Thick milkshake with ice cream and dry fruits" },
    
    // Ahmedabad
    { name: "Dabeli", city: "Ahmedabad", area: "Law Garden", tags: ["sweet", "spicy", "tangy"], reason: "Sweet and spicy potato filling in bun with pomegranate" },
    { name: "Khaman", city: "Ahmedabad", area: "Manek Chowk", tags: ["savory", "light", "fluffy"], reason: "Steamed gram flour snack, Gujarat's pride" },
    { name: "Fafda Jalebi", city: "Ahmedabad", area: "Ashram Road", tags: ["sweet", "savory", "crispy"], reason: "Crispy gram flour strips with sweet jalebi, Sunday tradition" },
    { name: "Pav Bhaji", city: "Ahmedabad", area: "CG Road", tags: ["spicy", "buttery", "filling"], reason: "Gujarati twist on Mumbai's classic" },
    
    // Jaipur
    { name: "Pyaaz Kachori", city: "Jaipur", area: "Johari Bazaar", tags: ["spicy", "crispy", "savory"], reason: "Crispy pastry filled with spiced onions, Jaipur's specialty" },
    { name: "Mirchi Vada", city: "Jaipur", area: "MI Road", tags: ["spicy", "hot", "crispy"], reason: "Large chilli fritters, Rajasthani favorite" },
    { name: "Ghewar", city: "Jaipur", area: "Bapu Bazaar", tags: ["sweet", "festive", "traditional"], reason: "Honeycomb-textured sweet soaked in sugar syrup" },
    { name: "Dal Baati Churma", city: "Jaipur", area: "Chandpol", tags: ["filling", "traditional", "comfort"], reason: "Baked wheat balls with lentils and sweet churma" },
    
    // Lucknow
    { name: "Tunday Kabab", city: "Lucknow", area: "Aminabad", tags: ["meaty", "rich", "traditional"], reason: "Melt-in-mouth kebabs, Lucknow's legendary delicacy" },
    { name: "Basket Chaat", city: "Lucknow", area: "Hazratganj", tags: ["tangy", "crispy", "unique"], reason: "Potato basket filled with chutneys and toppings" },
    { name: "Malai Makhan", city: "Lucknow", area: "Chowk", tags: ["sweet", "creamy", "rich"], reason: "Creamy milk-based dessert, Awadhi specialty" },
    
    // Amritsar
    { name: "Amritsari Kulcha", city: "Amritsar", area: "Lawrence Road", tags: ["filling", "savory", "traditional"], reason: "Stuffed bread with spiced potatoes, Punjab's pride" },
    { name: "Chole Bhature", city: "Amritsar", area: "Hall Bazaar", tags: ["spicy", "filling", "heavy"], reason: "Punjabi version with extra ghee and love" },
    { name: "Lassi", city: "Amritsar", area: "Golden Temple", tags: ["sweet", "cooling", "refreshing"], reason: "Thick creamy yogurt drink, perfect after spicy food" },
    
    // Indore
    { name: "Poha Jalebi", city: "Indore", area: "Sarafa Bazaar", tags: ["sweet", "savory", "breakfast"], reason: "Flattened rice with sweet jalebi, Indore's breakfast combo" },
    { name: "Bhutte Ka Kees", city: "Indore", area: "Chappan Dukaan", tags: ["savory", "creamy", "unique"], reason: "Grated corn cooked in milk and spices" },
    { name: "Garadu", city: "Indore", area: "Rajwada", tags: ["spicy", "tangy", "crispy"], reason: "Fried yam pieces with spices, winter special" },
    
    // Patna
    { name: "Litti Chokha", city: "Patna", area: "Gandhi Maidan", tags: ["traditional", "filling", "comfort"], reason: "Traditional Bihari delicacy, hearty and flavorful" },
    { name: "Sattu Paratha", city: "Patna", area: "Boring Road", tags: ["healthy", "filling", "traditional"], reason: "Flatbread stuffed with roasted gram flour" },
    { name: "Khaja", city: "Patna", area: "Silao", tags: ["sweet", "crispy", "traditional"], reason: "Layered sweet pastry, Bihar's famous dessert" },
    
    // Varanasi
    { name: "Kachori Sabzi", city: "Varanasi", area: "Kashi Chaat Bhandar", tags: ["spicy", "savory", "breakfast"], reason: "Crispy kachori with potato curry, Banarasi breakfast" },
    { name: "Tamatar Chaat", city: "Varanasi", area: "Dashashwamedh Ghat", tags: ["tangy", "spicy", "unique"], reason: "Tomato-based chaat unique to Varanasi" },
    { name: "Malaiyo", city: "Varanasi", area: "Assi Ghat", tags: ["sweet", "light", "winter"], reason: "Airy milk foam dessert, winter morning specialty" },
    
    // Surat
    { name: "Locho", city: "Surat", area: "Chowk Bazaar", tags: ["savory", "soft", "unique"], reason: "Steamed gram flour snack topped with sev and chutneys" },
    { name: "Surti Undhiyu", city: "Surat", area: "Rander", tags: ["traditional", "filling", "winter"], reason: "Mixed vegetable dish cooked underground" },
    { name: "Ghari", city: "Surat", area: "Nanpura", tags: ["sweet", "rich", "festive"], reason: "Sweet filled with dry fruits, Diwali special" },
    
    // Nagpur
    { name: "Saoji Chicken", city: "Nagpur", area: "Sitabuldi", tags: ["spicy", "hot", "meaty"], reason: "Extremely spicy chicken curry, not for the faint-hearted" },
    { name: "Tarri Poha", city: "Nagpur", area: "Dharampeth", tags: ["savory", "spicy", "breakfast"], reason: "Flattened rice with spicy curry" },
    { name: "Orange Barfi", city: "Nagpur", area: "Mahal", tags: ["sweet", "unique", "citrus"], reason: "Sweet made with Nagpur's famous oranges" }
];

// Get DOM elements
const cityInput = document.getElementById('city');
const preferenceInput = document.getElementById('preference');
const getRecommendationBtn = document.getElementById('getRecommendation');
const resultsDiv = document.getElementById('results');

// Main recommendation function
function getRecommendations() {
    const city = cityInput.value.trim().toLowerCase();
    const preference = preferenceInput.value.trim().toLowerCase();
    
    let recommendations = [];
    
    if (city && preference) {
        // Both city and preference provided
        recommendations = streetFoodData.filter(food => 
            food.city.toLowerCase().includes(city) && 
            food.tags.some(tag => tag.includes(preference) || preference.includes(tag))
        );
        
        // If no exact match, show all foods from that city
        if (recommendations.length === 0) {
            recommendations = streetFoodData.filter(food => 
                food.city.toLowerCase().includes(city)
            );
        }
    } else if (city) {
        // Only city provided
        recommendations = streetFoodData.filter(food => 
            food.city.toLowerCase().includes(city)
        );
    } else if (preference) {
        // Only preference provided
        recommendations = streetFoodData.filter(food => 
            food.tags.some(tag => tag.includes(preference) || preference.includes(tag))
        );
    } else {
        // Nothing provided, show popular options from different cities
        recommendations = [
            streetFoodData.find(f => f.name === "Vada Pav"),
            streetFoodData.find(f => f.name === "Chole Bhature"),
            streetFoodData.find(f => f.name === "Masala Dosa"),
            streetFoodData.find(f => f.name === "Puchka"),
            streetFoodData.find(f => f.name === "Dabeli")
        ].filter(Boolean);
    }
    
    // Limit to 5 recommendations
    recommendations = recommendations.slice(0, 5);
    
    // If still no results, show popular options
    if (recommendations.length === 0) {
        recommendations = [
            streetFoodData.find(f => f.name === "Vada Pav"),
            streetFoodData.find(f => f.name === "Pav Bhaji"),
            streetFoodData.find(f => f.name === "Golgappa")
        ].filter(Boolean);
    }
    
    displayResults(recommendations);
}

// Display results function
function displayResults(foods) {
    resultsDiv.innerHTML = '';
    
    foods.forEach((food, index) => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.style.animationDelay = `${index * 0.1}s`;
        
        foodCard.innerHTML = `
            <div class="food-name">${food.name}</div>
            <div class="food-location">📍 ${food.area}, ${food.city}</div>
            <div class="food-reason">${food.reason}</div>
        `;
        
        resultsDiv.appendChild(foodCard);
    });
    
    resultsDiv.classList.add('show');
}

// Event listener
getRecommendationBtn.addEventListener('click', getRecommendations);

// Allow Enter key to trigger search
preferenceInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRecommendations();
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRecommendations();
    }
});
