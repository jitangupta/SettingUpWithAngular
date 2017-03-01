import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
                {{title}}
                <ul>
                    <li *ngFor="#course of courses">{{course}}</li>
                </ul>
                                `,
    providers: [CourseService]
})
export class CoursesComponent {
    title = "This is title of Page";
    courses: string[];

    constructor(courseService: CourseService) {
        this.courses = courseService.GetCourse();
    }
}