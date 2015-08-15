Router.configure({
    layoutTemplate: "layout",
    notFoundTemplate: "notFound",
    waitOn: function() { return Meteor.subscribe("posts");  }
});

Router.route("/", {
  name:"postsList",
  template:"postsList"
});
Router.route("/posts/:_id", {
  name:"postPage",
  template:"postPage",
  data: function() { return Posts.findOne(this.params._id); }
});
Router.onBeforeAction('dataNotFound', { only: 'postPage'});
