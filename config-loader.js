/*============================================
  CONFIG LOADER - Tự động tải cấu hình
============================================*/

class ConfigLoader {
    constructor() {
        this.config = null;
        this.users = null;
        this.members = null;
        this.works = null;
        this.content = null;
        this.media = null;
    }

    // Load config.json
    async loadConfig() {
        try {
            this.config = JSON.parse(localStorage.getItem('config')) || (location.protocol === 'file:' ? initialData.config : await (await fetch('config.json')).json());
            console.log('✅ Config loaded:', this.config.version);
            return this.config;
        } catch (error) {
            console.error('❌ Config error:', error);
            return this.getDefaultConfig();
        }
    }

    // Load data files
    async loadData(type) {
        try {
            const endpoint = this.config?.api?.endpoints?.[type] || `data/${type}.json`;
            const data = location.protocol === 'file:' ? initialData[type] : await (await fetch(endpoint)).json();
            this[type] = data;
            console.log(`✅ ${type} loaded`);
            return data;
        } catch (error) {
            console.error(`❌ ${type} error:`, error);
            return this.getDefaultData(type);
        }
    }

    // Load all data
    async loadAll() {
        await this.loadConfig();
        await Promise.all([
            this.loadData('users'),
            this.loadData('members'),
            this.loadData('works'),
            this.loadData('content'),
            this.loadData('media')
        ]);
        return {
            config: this.config,
            users: this.users,
            members: this.members,
            works: this.works,
            content: this.content,
            media: this.media
        };
    }

    // Apply theme
    applyTheme() {
        if (!this.config?.theme) return;
        
        const root = document.documentElement;
        Object.keys(this.config.theme).forEach(key => {
            const cssVar = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
            root.style.setProperty(cssVar, this.config.theme[key]);
        });
        console.log('✅ Theme applied');
    }

    // Update site info
    updateSiteInfo() {
        if (!this.config) return;
        
        const site = this.config.site;
        document.title = site.name;
        
        const elements = {
            'siteName': site.name,
            'siteDescription': site.description,
            'sidebarTitle': site.name,
            'sidebarSubtitle': site.description
        };
        
        Object.keys(elements).forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = elements[id];
        });
        
        // Update logos
        if (site.logo) {
            ['loginLogo', 'sidebarLogo'].forEach(id => {
                const el = document.getElementById(id);
                if (el) el.src = site.logo;
            });
        }
        
        console.log('✅ Site info updated');
    }

    // Save data
    async saveData(type, data) {
        if (this.config?.api?.useSupabase) {
            console.log('📡 Saving to Supabase...');
            // TODO: Implement Supabase save
        } else {
            localStorage.setItem(type, JSON.stringify(data));
            console.log(`✅ ${type} saved to localStorage`);
        }
    }

    // Default config
    getDefaultConfig() {
        return {
            site: { name: "Ban Truyền Thông", shortName: "BTT" },
            theme: { primaryNavy: "#1e3a8a", primaryBlue: "#3b82f6" },
            features: { dashboard: true },
            settings: { 
                yearRange: { start: 2024, count: 7 },
                workTypes: ["Họp Ban", "Lịch công tác", "Sự kiện"],
                positions: ["Trưởng Ban", "Phó Ban", "Thành viên"]
            }
        };
    }

    // Default data
    getDefaultData(type) {
        const defaults = {
            users: { users: [] },
            members: { terms: { "2023-2026": [], "2026-2029": [] } },
            works: { works: [] },
            content: { content: [] },
            media: { media: [] }
        };
        return defaults[type] || {};
    }

    // Get years array
    getYears() {
        const { start, count } = this.config?.settings?.yearRange || { start: 2024, count: 7 };
        return Array.from({ length: count }, (_, i) => start + i);
    }

    // Get months array
    getMonths() {
        return Array.from({ length: 12 }, (_, i) => ({
            value: i + 1,
            label: `Tháng ${i + 1}`
        }));
    }
}

// Global instance
window.configLoader = new ConfigLoader();

console.log('✅ ConfigLoader initialized');