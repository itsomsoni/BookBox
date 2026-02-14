export type Review = {
    id: number;
    userName: string;
    rating: number;
    comment: string;
    date: string;
    isVerified: boolean;
}

export const bookReviews: Review[] = [
    {
        id: 1,
        userName: "Siddharth M.",
        rating: 5,
        comment: "The quality of the hardcover was exceptional. You can tell these aren't just random picks; they are curated with care.",
        date: "Feb 10, 2026",
        isVerified: true
    },
    {
        id: 2,
        userName: "Anjali P.",
        rating: 4,
        comment: "Finally found a local curator in Ahmedabad that gets my taste in philosophy. Delivery was faster than expected!",
        date: "Jan 28, 2026",
        isVerified: true
    },
    {
        id: 3,
        userName: "Vikram Shah",
        rating: 5,
        comment: "The unboxing experience was so aesthetic. It's not just a book; it's a whole vibe. Perfect for gifting too!",
        date: "Feb 12, 2026",
        isVerified: true
    },
    {
        id: 4,
        userName: "Priya D.",
        rating: 5,
        comment: "Ordering via WhatsApp was seamless. I asked for a recommendation for a long flight, and their pick was brilliant.",
        date: "Feb 05, 2026",
        isVerified: true
    },
    {
        id: 5,
        userName: "Rahul G.",
        rating: 4,
        comment: "Great collection of business and finance books that you don't easily find in local stores. Very impressed with the packaging.",
        date: "Jan 15, 2026",
        isVerified: true
    },
    {
        id: 6,
        userName: "Meera Iyer",
        rating: 5,
        comment: "As a bibliophile, I appreciate the condition these books arrive in. No bent corners or scratches. BookBox really cares.",
        date: "Feb 01, 2026",
        isVerified: true
    }
];