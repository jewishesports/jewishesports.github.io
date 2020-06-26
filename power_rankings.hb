
<header>
  <div class="header_img"></div>
  <nav class="navbar">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="news.html">News</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="hall_of_fame.html">Hall of Fame</a></li>
      <li class="active"><a href="power_rankings.html">Power Rankings</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact_us.html">Contact us</a></li>
    </ul>
  </nav>
</header>

<div class="main_content">
	<h1>Power Rankings</h1>
	<ul class="pr">
		{{#each Smashtag}}
		<li>{{this}}</li>
		{{/each}}
	</ul>
</div>