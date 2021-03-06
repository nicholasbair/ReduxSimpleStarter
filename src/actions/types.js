// --------------------------------------------------------
// Auth specific actions types
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';


// --------------------------------------------------------
// Activity specific action types

// Open/close activity modal
export const OPEN_ACTIVITY_MODAL = 'OPEN_ACTIVITY_MODAL';
export const CLOSE_ACTIVITY_MODAL = 'CLOSE_ACTIVITY_MODAL';

// Find a specific item from history feed
export const FETCH_HISTORY_ITEM_REQUEST = 'FETCH_HISTORY_ITEM_REQUEST';
export const FETCH_HISTORY_ITEM_SUCCESS = 'FETCH_HISTORY_ITEM_SUCCESS';

// Delete a logged activity
export const DELETE_HISTORY_ITEM_REQUEST = 'DELETE_HISTORY_ITEM_REQUEST';
export const DELETE_HISTORY_ITEM_SUCCESS = 'DELETE_HISTORY_ITEM_SUCCESS';

// Log an activity
export const POST_ACTIVITY_REQUEST = 'POST_ACTIVITY_REQUEST';
export const POST_ACTIVITY_SUCCESS = 'POST_ACTIVITY_SUCCESS';

// Update an existing activity
export const UPDATE_ACTIVITY_REQUEST = 'UPDATE_ACTIVITY_REQUEST';
export const UPDATE_ACTIVITY_SUCCESS = 'UPDATE_ACTIVITY_SUCCESS';

// Find all activity types
export const FETCH_ACTIVITY_TYPES_REQUEST = 'FETCH_ACTIVITY_TYPES_REQUEST';
export const FETCH_ACTIVITY_TYPES_SUCCESS = 'FETCH_ACTIVITY_TYPES_SUCCESS';

// Find all history items
export const FETCH_HISTORY_REQUEST = 'FETCH_HISTORY_REQUEST';
export const FETCH_HISTORY_SUCCESS = 'FETCH_HISTORY_SUCCESS';


// --------------------------------------------------------
// Dog specific action types

// Open/close dog modal
export const OPEN_DOG_MODAL = 'OPEN_DOG_MODAL';
export const CLOSE_DOG_MODAL = 'CLOSE_DOG_MODAL';

// Find all dogs
export const FETCH_DOGS_REQUEST = 'FETCH_DOGS_REQUEST';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';

// Find a specific dog
export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';

// Add a dog
export const POST_DOG_REQUEST = 'POST_DOG_REQUEST';
export const POST_DOG_SUCCESS = 'POST_DOG_SUCCESS';

// Update a dog
export const UPDATE_DOG_REQUEST = 'UPDATE_DOG_REQUEST';
export const UPDATE_DOG_SUCCESS = 'UPDATE_DOG_SUCCESS';

// Delete a dog
export const DELETE_DOG_REQUEST = 'DELETE_DOG_REQUEST';
export const DELETE_DOG_SUCCESS = 'DELETE_DOG_SUCCESS';
