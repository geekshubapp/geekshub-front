<script setup>

</script>

<template>
<main>
<div class="container">
  <div class="col-9 infinite-container">

    {% for post in news_feed %}

    <div class="card infinite-iteam" id="post">
      <div class="top">
        <a href="{% url 'accounts:profile' post.author.id %}">
        <div class="userDetails">
          <div class="profilepic">
            <div class="profile_img">
              <div class="image">
                {% for image in accounts_profile_image %}
                {% if post.author.id == image.author.id %}
                <img src="{{ image.image.url }}" alt="">
                {% endif %}
                {% endfor %}

              </div>

            </div>
          </div>
          <h3>{{ post.author }}<br></h3>
        </div>
        </a>
        {% if request.user.id == post.author.id %}
        <div>
          <a href="{% url 'posts:edit' post.id %}" style="color: black;"><span class="dot" style="padding: 1em;" title="Click to edit the post"><i class="fa-solid fa-pen-to-square"></i></span></a>
          <a style="color: red;" href="{% url 'posts:delete' post.id %}"><span class="dot"><i class="fa-solid fa-trash" title="Click to delete the post"></i></span></a>
        </div>
        {% endif %}
      </div>
      <a href="{% url 'posts:post' post.id %}">
      <div class="imgBx">
        <img src="{{ post.image.url }}" alt="post-1" class="cover">
      </div>
      </a>
      <div class="bottom">
        <div class="actionBtns">
          <div class="left">
            <form method="POST" id="like-form-{{ post.id }}" onclick="changeLikeColor_{{ post.id }}()">
              {% csrf_token %}
              <input type="text" style="display: none;" name="post_id" required="" value="{{ post.id }}" id="id_post_id-{{ post.id }}">
              
              <input type="text" style="display: none;" name="post_author-{{ post.id }}" required="" value="{{ post.author.id }}" id="post_author-{{ post.id }}">

              <button id="button-like">
              <span class="heart" >
              <span>
                <svg aria-label="Like" id="heart-{{ post.id }}" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48"
                  width="24">
                  <path
                    d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                  </path>
                </svg>
              </span>
            </span>
              </button>
          </form>
          <a href="{% url 'posts:post' post.id %}#Comments">
            <svg aria-label="Comment" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
              viewBox="0 0 48 48" width="24">
              <path clip-rule="evenodd"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fill-rule="evenodd"></path>
            </svg>
          </a>
            <svg height="0.1">

            </svg>
          </div>
          <div class="right">

          </div>
        </div>
        <a>
          <span class="likes" id="max_length_{{ post.id }}"></span><span class="likes"> Likes</span>
        </a>
        <a>
          <p class="message">
          </p>
        </a>
        <a >
          <h4 class="comments" id="viewcomments_{{ post.id }}"></h4>
        </a>
        <a >
          <h5 class="postTime" id="postTime-{{ post.id }}">{{ post.created_on }}</h5>
        </a>


      <div id=""></div>
      <br>
      </div>
      </div>





{% endif %}


{% endfor %}


{% endfor %}

{% if news_feed.has_next == False %}
<br id="disable-Brak"><br id="disable-Brak">
<div class="card noposts" id="post" style="padding-bottom: 1em;">
<div>
<br>
<h3 id="no-posts"  style="font-size: 20px; text-align: center; color: #18191A; font-weight: bold;">No more posts</h3>
<h3 id="no-posts"  style="font-size: 17px; text-align: center; color: #18191A; font-weight: 450;">Add more friends to see more posts in your Feed.</h3>
<br>
<span id="buttonfindMoreFriends">
<a href="{% url 'home:search' %}?q=">
<button class="findMoreFriendsButton">Find Friends</button>
</a>
</span>

</div>
</div>
{% endif %}



{% if news_feed.has_previous or news_feed.has_next %}
<!-- Pagination -->
<center>
<div class="pagination">
{% if news_feed.has_previous %}
<a href="?page={{ news_feed.previous_page_number }}">&laquo;</a>
{% endif %}
{% for n in news_feed.paginator.page_range %}
{% if news_feed.number == n %}
<a class="active">{{ n }}</a>
<a href="?page={{ n }}">{{ n }}</a>
{% endif %}
{% endfor %}
{% if news_feed.has_next %}
<a href="?page={{ news_feed.next_page_number }}">&raquo;</a>
{% endif %}
</div>
</center>
{% endif %}


</div>
  <div class="col-3">
    <h4>Top Followers</h4>
    {% for suggestion in suggestions_id %}
    {% for suggestion_data in suggestions_data %}
    {% if suggestion_data.id == suggestion %}      
    <div class="card" style="margin: 0.1px;">
      <div class="top">
        <div class="userDetails">
          <div class="profilepic">
            <div class="profile_img">
              <div class="image">
                
                {% for image in suggestions_image %}
                {% if image.author.id == suggestion_data.id  %}
                <a href="{% url 'accounts:profile' suggestion_data.id %}">
                <img src="{{ image.image.url }}" alt="">
                </a>
                {% endif %}
                {% endfor %}
              </div>
            </div>
          </div>
          <a href="{% url 'accounts:profile' suggestion_data.id %}">
          <h3>{{ suggestion_data.username }}<br><span>Popular</span></h3>
          </a>
        </div>

      </div>
    </div>
    {% endif %}
    {% endfor %}
    {% endfor %}
  
  </div>
  </div>
</main>

</template>
