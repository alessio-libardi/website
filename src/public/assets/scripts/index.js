import Alpine from 'alpinejs'

document.addEventListener('alpine:init', () => {
  Alpine.data('activities', () => ({
    activities: [
      'developing websites 👨🏻‍💻',
      'doing yoga 🧘🏻',
      'drinking lemonade 🍋',
      'my princess 👸🏼',
      'listening electropop 🎧',
      'reading mangas 📖',
      'watching animes 🍿'
    ],
    currentActivity: 0,

    init() {
      setInterval(() => {
        const next =
          this.currentActivity + 1 === this.activities.length
            ? 0
            : this.currentActivity + 1

        this.setActivity(next)
      }, 3000)
    },
    getActivity(index) {
      return `I ❤️ <em class="not-italic font-normal">${this.activities[index]}</em>`
    },
    setActivity(index) {
      this.currentActivity = index
    }
  }))
})

Alpine.start()
