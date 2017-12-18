<template functional>
  <b-navbar class="navbar" fixed toggleable="md">

    <b-container>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/" tag="h1">
        <span><icon name="code"></icon></span>
        <b>Kongpon</b>
        <span><icon name="copyright" color="orange"></icon></span>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item active class="nav-item-black" href="#home">
            <icon name="home"></icon>
            Home
          </b-nav-item>
          <b-nav-item active class="nav-item-black" href="#about">
            <icon name="user-circle"></icon>
            About
          </b-nav-item>
          <b-nav-item active class="nav-item-black" href="#achievements">
            <icon name="star"></icon>
            Achievements
          </b-nav-item>
          <b-nav-item active class="nav-item-black" href="#projects">
            <icon name="th"></icon>
            Projects
          </b-nav-item>
          <b-nav-item active class="nav-item-black" href="#contact">
            <icon name="send"></icon>
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-container>
  </b-navbar>
</template>

<style scoped>
.nav-item-list {
  font-size: 18px;
}
.nav-item-black {
  padding: 4px 0;
  transition: all 200ms;
}
.nav-item:hover {
  background: #e7e7e7;
}
.navbar {
  box-shadow: -1px -1px 3px gray;
  padding: 0;
}

</style>
