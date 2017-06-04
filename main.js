var post = [];

var id= 1;

var newPost= function (id,text) {
	post.push ({id:id, text:text});

}

var updatePost = function () {
	$('.posts').empty();	
	for (i=0; i<post.length; i++) {
		$('.posts').append('<br> <p class="post" data-id="' + post[i].id + '">' + post[i].text +  ' <br> <button class="btn btn-primary remove-post" type="button">Remove Post</button>') ;
	}
}



$('.add-post').on('click', function() { 
	newPost (id,$('#post-name').val());
	id++;
	updatePost ();


});


$('.posts').on('click', 'button' ,function () {

	post.splice ($(this.closest('p')), 1);
	$(this.closest('p')).remove();
})
