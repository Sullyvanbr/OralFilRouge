// Leaflet
const carte = L.map('map',).setView([36.5, 137], 5);

// Fond de carte
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap © CARTO',
    maxZoom: 18
}).addTo(carte);

// Liste des lieux
const lieux = [
    { nom: "Tokyo",       jp: "東京",  emoji: "🗼", lat: 35.6762, lng: 139.6503, desc: "Capitale du Japon." },
    { nom: "Kyoto",       jp: "京都",  emoji: "⛩️", lat: 35.0116, lng: 135.7681, desc: "L'ancienne capitale." },
    { nom: "Osaka",       jp: "大阪",  emoji: "🏯", lat: 34.6937, lng: 135.5023, desc: "Coeur gastronomique du Japon." },
    { nom: "Mont Fuji",   jp: "富士山", emoji: "🗻", lat: 35.3606, lng: 138.7274, desc: "Le symbole du Japon, 3 776 m d'altitude." },
    { nom: "Sapporo",     jp: "札幌",  emoji: "❄️", lat: 43.0618, lng: 141.3545, desc: "La ville du festival de neige d'Hokkaido." },
    { nom: "Hiroshima",   jp: "広島",  emoji: "🎎", lat: 34.3853, lng: 132.4553, desc: "Ville symbole de paix et de résilience." },
    { nom: "Nara",        jp: "奈良",  emoji: "🦌", lat: 34.6851, lng: 135.8048, desc: "Cerfs sacrés en liberté et Grand Bouddha." },
    { nom: "Fukuoka",     jp: "福岡",  emoji: "🍜", lat: 33.5904, lng: 130.4017, desc: "Le berceau du ramen Hakata." },
    { nom: "Arashiyama",  jp: "嵐山",  emoji: "🎋", lat: 35.0094, lng: 135.6728, desc: "La bambouseraie mythique de Kyoto." },
    { nom: "Okinawa",     jp: "沖縄",  emoji: "🌺", lat: 26.2124, lng: 127.6809, desc: "Archipel tropical aux eaux turquoises." }
];

// Fonction marqueur
lieux.forEach(function(lieu) {
    const icone = L.divIcon({
    html: '<div style="font-size:24px;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.3))">' + lieu.emoji + '</div>',
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -18]
    });

    const marqueur = L.marker([lieu.lat, lieu.lng], { icon: icone }).addTo(carte);

    marqueur.bindPopup(
    '<div class="popup-contenu">' +
        '<h3>' + lieu.emoji + ' ' + lieu.nom + ' <span style="color:#C0392B;font-size:0.85rem">' + lieu.jp + '</span></h3>' +
        '<p>' + lieu.desc + '</p>' +
    '</div>'
    );
});


// Menu burger
function toggleMenu() {
    const menu = document.getElementById('nav-liens');
    const burger = document.getElementById('burger');
    menu.classList.toggle('ouvert');
    burger.classList.toggle('ouvert');
}