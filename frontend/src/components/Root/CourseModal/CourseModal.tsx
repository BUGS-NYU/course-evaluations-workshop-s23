import { FunctionalComponent } from 'react';
import { QuestionSection } from 'lib/types.ts';
import { useGetCourseById } from './use-get-course-by-id.ts';
import styles from './styles.module.css';

const QuestionSection: FunctionalComponent<QuestionSection> = ({ title, questions }) => (
  <>
    <h2>{title}</h2>
    {questions.map(({ question, average }) => (
      <p key={question}>
        {question} <strong>Rating: {average}</strong>
      </p>
    ))}
  </>
);

export const CourseModal: FunctionalComponent<{
  courseId: string | null;
  closeModal: () => void;
}> = ({ courseId, closeModal }) => {
  const { isLoading, data } = useGetCourseById(courseId);

  const className = courseId ? `${styles.container} ${styles.visible}` : styles.container;

  return (
    <div className={className}>
      <div className={styles.modalBg}></div>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={closeModal}>
          Close
        </button>
        {isLoading || data === null ? (
          'Loading...'
        ) : (
          <>
            {/*
                complete this component: display the exhaustive data about the course
                make sure you access the data properly: the data state holds response
                from the /course/:courseId endpoint, which has a structure {data: ...}
                meaning that you will have to access the nested response properties like so:
                data.data.instructors, data.data.term ...
            */}
          </>
        )}
      </div>
    </div>
  );
};
