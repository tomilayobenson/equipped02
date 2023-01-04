import { TESTIMONIALS } from "../../data/shared/TESTIMONIALS";

export const AllTestimonials = () => {
    return TESTIMONIALS;
}

export const ListedTestimonials = () => {
    const dividedTestimonials = []
    const testimonials = AllTestimonials();
    while (testimonials.length) {
        //call carousel for each slide
        const TestPart = testimonials.splice(0,3);
        dividedTestimonials.push(TestPart);
    }
    return dividedTestimonials;
}