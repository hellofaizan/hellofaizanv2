import fs from 'fs';
import path from 'path';

type Metadata = {
  id: number;
  url: string;
  createdAt: string;
  updatedAt?: string;
};

export async function getBookmarks() {
    const res = await fetch('https://hellofaizan.tech/api/bookmarks');
    const bookmarks = await res.json();
    const data = JSON.stringify(bookmarks);
    return data;
}