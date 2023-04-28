import { FunctionalComponent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BaseCourse } from 'lib/types.ts';
import { useSearchCourse } from './use-search-course.ts';
import { PageCounter } from './PageCounter';
import { CourseModal } from './CourseModal';
import styles from './styles.module.css';

interface CourseEntryProps extends BaseCourse {
  onClick: () => void;
}

const CourseEntry: FunctionalComponent<CourseEntryProps> = ({
  term,
  description,
  instructors,
  responseRate,
  onClick,
}) => {
  return (
    <div className={styles.courseEntry} onClick={onClick}>
     {/* complete this component: show the class description, instructors, response rate, term */}
    </div>
  );
};

const Root = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const viewingCourseIdQuery = searchParams.get('viewingId');
  const [courseId, setCourseId] = useState<string | null>(viewingCourseIdQuery || null);
  const { data, isLoading, changePhrase, phrase } = useSearchCourse();

  const setViewingCourseIdQuery = (viewingId: string) =>
    setSearchParams((prevParams) => {
      if (viewingId === '') {
        prevParams.delete('viewingId');
      } else {
        prevParams.set('viewingId', viewingId);
      }
      return prevParams;
    });

  const closeModal = () => {
    setCourseId(null);
    setViewingCourseIdQuery('');
  };

  const onCourseEntryClick = (updatedCourseId: string) => {
    setCourseId(updatedCourseId);
    setViewingCourseIdQuery(updatedCourseId);
  };

  const renderData =
    data.data.length > 0
      ? data.data.map((course) => (
          <CourseEntry
            key={course._id}
            {...course}
            onClick={() => onCourseEntryClick(course._id)}
          />
        ))
      : `No results to display`;

  const setSearchValue = (e) => changePhrase(e.target.value);

  return (
    <>
      <CourseModal courseId={courseId} closeModal={closeModal} />
      <div className={styles.siteContainer}>
        <div className={styles.searchInputBg}>
          <input
            type="text"
            placeholder="Type your search phrase..."
            value={phrase}
            onChange={setSearchValue}
            className={styles.searchInput}
          />
        </div>
        {isLoading ? 'Loading...' : renderData}
        <PageCounter totalPages={data.pagination.totalPages} />
      </div>
    </>
  );
};

export default Root;
