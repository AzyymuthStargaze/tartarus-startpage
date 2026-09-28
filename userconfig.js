let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Jakarta, Indonesia',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
      b: ["https://search.brave.com/search?q=", "Brave"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chatgpt.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "sea rch",
      background_url: "src/img/banners/shiroko-dance.gif",
      categories: [{
        name: "Relatively visited",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "#bd25d4",
          },
          {
            name: "telegram",
            url: "https://web.telegram.org/",
            icon: "brand-telegram",
            icon_color: "#0088cc",
          },
          {
            name: "spotify",
            url: "https://open.spotify.com/?flow_ctx=a13f537d-8f64-4ef0-ab67-153fa85846f6%3A1785443654",
            icon: "brand-spotify",
            icon_color: "#17e74b",
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "roblox",
            url: "https://roblox.com/home",
            icon: "square-filled",
            icon_color: "#1cd9f1",
          },
          {
            name: "monkeytype",
            url: "https://www.monkeytype.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
          {
            name: "steam",
            url: "https://store.steampowered.com/",
            icon: "brand-steam",
            icon_color: "#3883d3",
          },
          {
            name: " BA wiki",
            url: "https://bluearchive.wiki/wiki/Main_Page",
            icon: "brand-wikipedia",
            icon_color: "#3689dc",
          },
           {
            name: "buildit",
            url: "https://builditapp.com/",
            icon: "brand-minecraft",
            icon_color: "#3db2f0",
          },
        ],
      }, {
        name: "Watch & Stream",
        links: [
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "tiktok",
            url: "https://www.tiktok.com/en/",
            icon: "brand-tiktok",
            icon_color: "#95370f",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "animepahe",
            url: "https://animepahe.pw/",
            icon: "brand-youtube",
            icon_color: "#4053d1",
          },
          {
            name: "samehadaku",
            url: "https://v2.samehadaku.how/",
            icon: "brand-youtube",
            icon_color: "#d43cee",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/hoshino.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://id.pinterest.com/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "leonardo ai",
              url: "https://app.leonardo.ai/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "dribble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
            {
              name: "canva",
              url: "https://www.canva.com/templates",
              icon: "components",
              icon_color: "#c565dd",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#a9b665",
            },
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "3d & UI/UX",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
            {
              name: "jam",
              url: "https://jam.dev/s/d16d2d9c-efaa-4d2e-b509-69a52663ffba",
              icon: "components",
              icon_color: "#cc2626",
            },
             {
              name: "uxcel",
              url: "https://app.uxcel.com/home",
              icon: "components",
              icon_color: "#221f1f",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/hina-cheeks.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
            {
              name: "myinstants",
              url: "https://www.myinstants.com/",
              icon: "music",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "more",
      background_url: "src/img/banners/shupogaki.gif",
      categories: [
        {
          name: "utilities",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "tlauncher",
              url: "https://tlauncher.org/en/profile/",
              icon: "brand-minecraft",
              icon_color: "#3ee91c",
            },
            {
              name: "modrinth",
              url: "https://modrinth.com/",
              icon: "brand-minecraft",
              icon_color: "#519943",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "google photos",
              url: "https://photos.google.com/u/0/?pageId=none",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
            {
              name: "pling",
              url: "https://www.pling.me/",
              icon: "box",
              icon_color: "#3532d4",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
