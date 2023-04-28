import { API_BASE_URL, PER_PAGE } from './constants.ts';
// when using the fetchApi function, you must provide the return type generic
// for example, when calling the /search endpoint: fetchApi<SearchCoursesResponse>(...)
import { SearchCoursesResponse, GetCourseByIdResponse } from './types.ts';

const fetchApi = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const searchCourses = async (phrase: string, currPage: string) => {
  return Promise.resolve({});
  // remove the above return and complete this function
  // use the fetchApi wrapper function provided above to call the search endpoint
  // don't forget to provide the necessary query strings for the call:
  // phrase, currPage, perPage (use the default constant described above)
  // for example, `/search?phrase=${phrase}&currPage=${currPage}....`
  // dont forget to return the result and await the fetchApi!
  // https://en.wikipedia.org/wiki/Query_string
};

export const getCourseById = async (courseId: string) => {
  return Promise.resolve({});
  // remove the above return and complete this function
  // use the fetchApi wrapper function provided above to call the /courses/:courseId endpoint
  // provide the courseId as part of the endpoint string
  // dont forget to return the result and await the fetchApi!
};
