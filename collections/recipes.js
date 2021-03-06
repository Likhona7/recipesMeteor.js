Recipes = new Mongo.Collection('recipes');


// if (Meteor.isServer) {
//   // This code only runs on the server
//   Meteor.publish('recipes', function tasksPublication() {
//     return Tasks.find();
//   });
// }

Recipes.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});
Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  amount: {
    type: String
  }
});

RecipeSchema = new SimpleSchema({
  name: {
    type : String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },

  ingredients: {
  type: [Ingredient]
},

inMenu: {
  type: Boolean,
defaultValue: false,
optional: true,
autoform: {
  typt: "hidden"
}

},

  author: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId
    },

    autoform: {
      type: "hidden"
    }

  },
  createdAt: {
    type: Date,
    label: "created At",
    autoValue: function(){
      return new Date()
    },
    autoform: {
      type: "hidden"
    }

  }
})

Recipes.attachSchema(RecipeSchema);


// // Recipes.allow({
//     insert: function(userId, doc) {
//         return !!userId;
//     },
//     update: function(userId, doc) {
//         return !!userId;
//     }
// });
//
// Ingredient = new SimpleSchema({
//     name: {
//         type: String
//     },
//     amount: {
//         type: String
//     }
// });
//
// RecipeSchema = new SimpleSchema({
//     name: {
//         type: String,
//         label: "Name"
//     },
//     desc: {
//         type: String,
//         label: "Description"
//     },
//     ingredients: {
//         type: [Ingredient]
//     },
//     inMenu: {
//         type: Boolean,
//         defaultValue: false,
//         optional: true,
//         autoform: {
//             type: "hidden"
//         }
//     },
//     author: {
//         type: String,
//         label: "Author",
//         autoValue: function() {
//             return this.userId
//         },
//         autoform: {
//             type: "hidden"
//         }
//     },
//     createdAt: {
//         type: Date,
//         label: "Created At",
//         autoValue: function() {
//             return new Date()
//         },
//         autoform: {
//             type: "hidden"
//         }
//     }
// });
//
// Meteor.methods({
//     toggleMenuItem: function(id, currentState) {
//         Recipes.update(id, {
//             $set: {
//                 inMenu: !currentState
//             }
//         });
//     },
//     deleteRecipe: function(id) {
//         Recipes.remove(id);
//     }
// });
//
// Recipes.attachSchema(RecipeSchema);
