import React from 'react';
import { css, StyleSheet } from "aphrodite";
import CourseShape from './CourseShape'
import propTypes from 'prop-types'
import CourseListRow from './CourseListRow';


const styles = StyleSheet.create({
	CourseList: {
		width: '100%',
		border: 1px solid var(--table-color),
		border-collapse: collapse,
	}
})

export default function CourseList() {
	return <table id={css(styles.CourseList)}>
		  <thead>
		    <CourseListRow textFirstCell='Available courses' isHeader={true} />
		    <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
		  </thead>
		  <tbody id="CourseBody">
		    {listCourses.length === 0 & (
			    <tr>
			    <td>No course available yet</td>
			    </tr>
		    )}
	 	    {listCourses.map(course => (
			    <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
		    ))}
		  </tbody>
		</table>
}

CourseList.defaultProps = {
	listCourses: []
}
CourseList.propTypes = {
        listCourses: propTypes.array
}
