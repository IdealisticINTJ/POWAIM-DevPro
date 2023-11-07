new Vue ({
	el: '#taskList',
	data: {
		title: 'task tracker',
		tasks: [
			{ name: '3 DSA questions on LeetCode' },
			{ name: 'Re-read "The Alchemist"'},
			{ name: 'Watch the Linguistics YouTube Lectures' }
		]
	},
	methods: {
		newItem: function() {
			if (!this.tasks.name) {
				return
			}
			this.tasks.push ( {
				name: this.tasks.name,
				del: ''
			});
      this.tasks.name = "";
		},
		delItem: function (task) {
			this.tasks.splice(this.tasks.indexOf(task), 1)
		}
	}
})
