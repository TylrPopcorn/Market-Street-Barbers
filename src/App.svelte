<!-- DEPENDENCIES -->
<!-- npm i degit -->
<!-- npm install -->

<!-- How to create a new svelte project: -->
<!-- degit sveltejs/template [project-name]-->

<!-- alternative way -->
<!-- npx degit sveltejs/template [project-name] -->
<!---------------------------------------------->

<!-- HOW TO START SERVER: -->
<!-- npm run build -->
<!-- npm run dev -->


<!-- JAVASCRIPT -->
<script>
	//Imports:------
	import NavBar from "./Components/NavBar.svelte";
	import Hero from "./Components/Hero.svelte";
	import AboutUs from "./Components/AboutUs.svelte";
	import OurTeam from "./Components/OurTeam.svelte";
	import Gallery from "./Components/Gallery.svelte";
	import CTA from "./Components/CTA.svelte";
	import Footer from "./Components/Footer.svelte";
	//Variables:----
	//Functions:---------
</script>

<!-- HTML -->
<main>
	<div class="App">
      <div id="hero" class="Hero">
        <NavBar />
        <Hero />
    </div>
	<AboutUs />
	<OurTeam />
	<Gallery />
	<CTA />
	<Footer />
</main>
