<template>
	<div class="test">
		<input type="text" v-model="title"><br />

		<h1>{{title}}</h1>

		<span v-html="subtitle"></span>
		<div v-if="showName">
			<p>{{ user.firstName }}</p>
			<p v-text="user.lastName"></p>
		</div>

		<div v-else>No one</div>
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>

		<button v-on:click="greet('oh hai')">Say Greeting</button>
		<br />
		<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">

		<hr />
			<label for="firstName">First Name: </label><input type="text" v-model="user.firstName">

			<label for="lastName">Last Name: </label><input type="text" v-model="user.lastName">

			<h3>{{fullName}}</h3>

			<h2>{{ msg }}</h2>
	</div>
</template>

<script>
	export default {
		name: 'test',
		props: {
			msg: {
				type: String,
				default: 'Default message'
			}
		},
		data() {
			return {
				title: 'Hello World',
				subtitle: 'Here I am',
				user: {
					firstName: 'John',
					lastName: 'Doe'
				},
				showName: true,
				items: [
					{title: 'Item 1'},
					{title: 'Item 2'},
					{title: 'Item 3'},
				]
			}
		},

		methods: {
			greet(greeting) {
				alert(greeting);
			},
			pressKey(e) {
				console.log(e.target.value)
			},
			enterHit(){
				console.log('Enter was hit')
			}
		},

		computed: {
			fullName: function() {
				return this.user.firstName + ' ' +this.user.lastName
			}
		}
	}
</script>

<style>
	
</style>