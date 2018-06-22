<!-- eslint-disable -->

<template>
	<div class="users">
		<h1>Users</h1>
		<form @submit.prevent="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter name">
			<br/>
			<input type="text" v-model="newUser.email" placeholder="Enter email">
			<br/>
			<button type="submit" value="Submit">Submit</button>
		</form>
		<ul>
			<li v-for="user in users">
				<span :class="{contacted: user.contacted}">
					{{ user.name }}
					{{ user.email }}
					<button @click="deleteUser({user})">Delete</button>
				</span>
				
				<input type="checkbox" class="toggle" v-model="user.contacted">
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'users',
		
		data() {
			return {
				newUser: {},
				users: []
			}
		},

		methods: {
			addUser(e) {
				this.users.push({
					name: this.newUser.name,
					email: this.newUser.email,
					contacted: false
				});
			},
			deleteUser(user) {
				this.users.splice(this.users.indexOf(user), 1);
			}
		},

		created() {
			this.$http.get('https://jsonplaceholder.typicode.com/users')
			.then(response => this.users = response.data) 
		},

	}
</script>

<style scoped> 
	ul {
		list-style-type: none;
	}
	.contacted {
		text-decoration: line-through;
	}
</style>
