<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	
	<head>
		<meta charset="<?php bloginfo('charset'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title><?php wp_title(' | ', true, 'right'); ?></title>
		
		<!-- Trade Gothic from Fonts.com -->
		<script type="text/javascript" src="http://fast.fonts.net/jsapi/5be809dc-7661-4819-a314-d625cf2e4e8e.js"></script>

		<!-- Playfair from Google -->
		<link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>



		<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_uri(); ?>" />

		<script src="<?php echo get_template_directory_uri(); ?>/js/vendor/modernizr-2.6.2.min.js"></script>
		<script src="<?php echo get_template_directory_uri(); ?>/js/vendor/conditionizr.min.js"></script>
		<?php wp_head(); ?>
	</head>
	
	<body <?php
	global $post;
	$slug = get_post( $post )->post_name;
	body_class($slug);
	?>>
		
		<div id="wrapper" class="hfeed grid-container">
		
			<header id="page-header" role="banner">
		
				<section id="branding">
					<div id="site-title">
						<h1><a class="fill" href="<?php echo esc_url(home_url('/')); ?>" title="<?php esc_attr_e( get_bloginfo('name'), 'blankslate' ); ?>" rel="home"><?php echo esc_html( get_bloginfo('name') ); ?></a></h1>
					</div>
					<div id="site-description"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('description'); ?></a></div>
				</section>
				
				<nav id="main-nav" role="navigation">
					<a class="handle icon"></a>
					<?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>
				</nav>
		
			</header> <!-- header#page-header -->