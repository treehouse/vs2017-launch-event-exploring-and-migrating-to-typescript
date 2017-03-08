// export default class Rating {
//   constructor(public username: string, public rating: number, public comment: string) {
//   }
// }
'use strict';
function Rating(username, rating, comment) {
    this.username = username;
    this.rating = rating;
    this.comment = comment;
}
module.exports = Rating;
