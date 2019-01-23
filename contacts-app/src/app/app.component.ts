import { Component, OnInit } from '@angular/core';
import { ContactsConfig } from './config/ContactsConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contacts';
  contacts: any;
  contactDetails: any;
  searchContact: string;
  ratings: number[] = [];
  noratings: number[] = [];
  likesAndDisLikes: any[] = [];
  ngOnInit() {
    this.fetchContacts();
  }

  fetchContacts() {
    this.contacts = ContactsConfig.getContacts().People;
  }

  fetchContactDetails(contact: any) {
    this.contactDetails = contact;
    this.ratings = Array(contact.rating).fill(contact.rating);
    if (this.ratings.length !== 5) {
      this.noratings = Array(5 - contact.rating).fill(5 - contact.rating);
    } else {
      this.noratings = [];
    }
    this.formatLikesAndDislikes(contact);
  }

  formatLikesAndDislikes(contact: any) {
    const likes = contact.Likes;
    const dislikes = contact.Dislikes;
    const n = likes.length > dislikes.length ? likes.length : dislikes.length;
    this.likesAndDisLikes = [];
    for (let i = 0; i < n; i++) {
      if (n === likes.length) {
        if (i >= dislikes.length) {
          this.likesAndDisLikes.push({ 'like': likes[i], 'dislike': '' });
        } else {
          this.likesAndDisLikes.push({ 'like': likes[i], 'dislike': dislikes[i] });
        }
      } else {
        if (i >= likes.length) {
          this.likesAndDisLikes.push({ 'like': '', 'dislike': dislikes[i] });
        } else {
          this.likesAndDisLikes.push({ 'like': likes[i], 'dislike': dislikes[i] });
        }
      }
    }
  }
}
