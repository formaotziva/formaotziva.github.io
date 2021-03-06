<?php
/**
 * Template part for displaying results in search pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package islemag
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class("entry"); ?>>

	<div class="entry-media">
		<figure>
			<a href="<?php the_permalink(); ?>">
			 <?php
				if(has_post_thumbnail()){
					the_post_thumbnail('islemag_blog_post');
				} else {
					echo '<img src="'.get_template_directory_uri().'/img/blogpost-placeholder.jpg" />';
				}
			?>
			</a>
		</figure>
	</div><!-- End .entry-media -->

	<span class="entry-date"><?php echo get_the_date( 'd' ); ?><span><?php echo strtoupper(get_the_date( 'M' )); ?></span></span>
	<?php
		$id = get_the_ID();
		$format = get_post_format( $id );
		switch ( $format ) {
			case 'aside':
				$icon_class = "fa-file-text";
				break;
			case 'chat':
				$icon_class = "fa-comment";
				break;
			case 'gallery':
				$icon_class = "fa-file-image-o";
				break;
			case 'link':
				$icon_class = "fa-link";
				break;
			case 'image':
				$icon_class = "fa-picture-o";
				break;
			case 'quote':
				$icon_class = "fa-quote-right";
				break;
			case 'status':
				$icon_class = "fa-line-chart";
				break;
			case 'video':
				$icon_class = "fa-video-camera";
				break;
			case 'audio':
				$icon_class = "fa-headphones";
				break;
		}
		if( !empty( $icon_class ) ){ ?>
			<span class="entry-format"><i class="fa <?php echo $icon_class; ?>"></i></span>
	<?php
		} ?>
	<span class="entry-format"><i class="fa fa-file-image-o"></i></span>
	<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

	<div class="entry-content">
		<?php
			the_excerpt();
		?>

		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'islemag' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php islemag_entry_footer(); ?>
	</footer><!-- .entry-footer -->


</article>
