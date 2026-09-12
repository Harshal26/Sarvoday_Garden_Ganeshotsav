/**
 * Data Service — Abstraction layer for data access
 * Uses fetch to read local JSON files, compatible with browser native ES modules.
 * Designed for easy swap to Google Sheets API / Firebase / Supabase.
 */

class DataService {
  constructor() {
    this.cache = new Map();
  }

  async fetchJson(filename) {
    if (this.cache.has(filename)) {
      return this.cache.get(filename);
    }
    const response = await fetch(`/src/data/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}: ${response.statusText}`);
    }
    const data = await response.json();
    this.cache.set(filename, data);
    return data;
  }

  async getSettings() {
    return await this.fetchJson('settings.json');
  }

  async getAnnouncements() {
    const data = await this.fetchJson('announcements.json');
    return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  async getEvents() {
    const data = await this.fetchJson('events.json');
    return [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  async getCommittee() {
    return await this.fetchJson('committee.json');
  }

  async getFinance() {
    return await this.fetchJson('finance.json');
  }

  async getGallery() {
    return await this.fetchJson('gallery.json');
  }

  async getVideos() {
    const data = await this.fetchJson('videos.json');
    return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  async getAarti() {
    return await this.fetchJson('aarti.json');
  }

  async getDocuments() {
    return await this.fetchJson('documents.json');
  }

  async getContacts() {
    return await this.fetchJson('contacts.json');
  }

  async getCompetitions() {
    return await this.fetchJson('competitions.json');
  }

  async getArchive() {
    return await this.fetchJson('archive.json');
  }

  /**
   * Generate flats data from settings (no personal info)
   */
  async getFlats(wing) {
    const settings = await this.getSettings();
    const flats = [];
    for (let floor = settings.totalFloors; floor >= 1; floor--) {
      const floorFlats = [];
      for (let flat = 1; flat <= settings.flatsPerFloor; flat++) {
        const flatNum = `${wing}-${floor}0${flat}`;
        floorFlats.push({
          id: flatNum,
          wing,
          floor,
          number: flatNum,
          occupied: true, // Default — no private info
        });
      }
      flats.push({ floor, flats: floorFlats });
    }
    return flats;
  }
}

// Singleton instance
export const dataService = new DataService();
