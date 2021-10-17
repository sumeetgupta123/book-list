import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

import { Books } from './data.model'
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('DashboardService', () => {
    let service: DashboardService;
    let httpTestCtrl: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DashboardService]
        })

    });
    beforeEach(() => {
        service = TestBed.get(DashboardService);
        httpTestCtrl = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        const service: DashboardService = TestBed.get(DashboardService);
        expect(service).toBeTruthy();
    });

    afterEach(() => {
        httpTestCtrl.verify();
    });

    it('be able to retrieve posts from the API via GET', () => {
        const dummyPosts: Books[] = [{
            title: 'GMAT Prep Plus 2021',
            author: 'Kaplan Test Prep',
            publisher: 'Kaplan Publishing',
            date: '2019-09-03'
        }, {
            title: 'GRE Prep Plus 2020',
            author: 'Kaplan Test Prep',
            publisher: 'Kaplan Publishing',
            date: '2020-09-03'
        }];
        service.getData().subscribe(posts => {
            expect(posts.length).toBe(2);
            expect(dummyPosts).toBe(posts, 'should check mock data');
        });
        const request = httpTestCtrl.expectOne(service.apiUrl);

        expect(request.cancelled).toBeFalsy();
        expect(request.request.responseType).toEqual('json');

        request.flush(dummyPosts);

    });

});
