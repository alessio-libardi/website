import Alpine from 'alpinejs'

document.addEventListener('alpine:init', () => {
  Alpine.data('activities', () => ({
    activities: [
      'developing websites π¨π»βπ»',
      'doing yoga π§π»',
      'drinking lemonade π',
      'my princess πΈπΌ',
      'listening electropop π§',
      'reading mangas π',
      'watching animes πΏ'
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
      return `I β€οΈ <em class="not-italic font-normal">${this.activities[index]}</em>`
    },
    setActivity(index) {
      this.currentActivity = index
    }
  }))
})

Alpine.start()
