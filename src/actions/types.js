export const SearchActionTypes = {
  SEARCH: '[Search] SEARCH /search',
  SEARCH_FULFILLED: '[Search] SEARCH_FULFILLED /search',
  SEARCH_FAILED: '[Search] SEARCH_FAILED  /search',
  SEARCH_LOADING: '[Search] SEARCH_LOADING /search'
}

export const UIActionTypes = {
  SHOW_ANONYMOUSLY: '[UI] SHOW_ANONYMOUSLY',
  SHOW_SIGN_IN: '[UI] SHOW_SIGN_IN',
  OPEN_PROFILE: '[UI] OPEN_PROFILE',
  CLOSE_PROFILE: '[UI] CLOSE_PROFILE',
}
export const ProfileActionTypes = {
  FETCH_KID_PROFILE: '[Profile] FETCH_KID_PROFILE /kid-profile',
  FETCH_KID_PROFILE_FULFILLED: '[Profile] FETCH_KID_PROFILE_FULFILLED /kid-profile',
  FETCH_KID_PROFILE_FAILED: '[Profile] FETCH_KID_PROFILE_FAILED /kid-profile',
  FETCH_KID_PROFILE_LOADING: '[Profile] FETCH_KID_PROFILE_LOADING /kid-profile',
}