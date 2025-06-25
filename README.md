 ### 1 - Contact Book (with Local Storage)

#### Task Description
Take your solution to the assignment from the previous homework and add storing phonebook contacts to `localStorage`. Use lifecycle methods.

#### Requirements

- When a contact is **added or deleted**, the updated contacts are saved to `localStorage`.
- When the application **loads**, it checks `localStorage`:
  - If there are saved contacts — load them into `state`.
  - If not — start with an empty contact list.

#### Technical Notes

- Use `componentDidMount()` to **read** from local storage.
- Use `componentDidUpdate()` to **write** to local storage after each update.

#### State Example

```js
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // ...
  ],
  filter: ''
}
```

---

### 2 - Image Search App

Create a **keyword-based image search application** using the Pixabay API. Below is a breakdown of the required components and functionality.

---

#### 🔗 API: Pixabay

- Use this URL format for HTTP requests:
  ```
  https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
  ```
- Register to get your personal `API key`.

#### Required Properties from API Response

- `id`
- `webformatURL` — for preview
- `largeImageURL` — for modal

---

### Components Description

#### `<Searchbar />`

- Accepts one prop: `onSubmit` — a function to handle form submission.
- Contains a search form:

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

---

#### `<ImageGallery />`

- Renders a list of `<ImageGalleryItem />`.
- HTML structure:

```html
<ul class="gallery">
  <!-- <li> with image cards -->
</ul>
```

---

#### `<ImageGalleryItem />`

- Single image item component.
- Receives props: `webformatURL`, `largeImageURL`, `alt`.
- Clicking on the image opens `<Modal />`.

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

---

#### `<Button />`

- Loads the next page of results on click.
- Appears **only** when there are already loaded images.
- Hidden if the image array is empty.

---

#### `<Loader />`

- Spinner component, shown while images are being fetched.
- Can use libraries like `react-loader-spinner`.

---

#### `<Modal />`

- Opens on image click with a larger version of the image.
- Dark overlay background.
- Closes when:
  - User presses `Escape`
  - Clicks outside the image

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```

---

### Functionality Overview

- User submits a keyword → API request is made.
- Images are displayed in a gallery.
- Clicking an image opens a modal.
- Button "Load More" fetches and appends next 12 images.
- Loader shows while fetching data.
- Pagination managed with `page` and reset to `1` for new search.
- Smooth UX with conditional rendering.

---

📦 Optional enhancements:
- Use `react-toastify` or `Notiflix` for notifications.
- Add smooth scrolling to the next image group.
