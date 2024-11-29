const FAQPage = () => {
    const faqs = [
        {
            question: "What is NanoSearch?",
            answer: "NanoSearch is a specialized search engine for nanoscience papers. It uses embeddings from a custom pre-trained language model to retrieve relevant nanoscience papers, rather than a keyword-based or lexical search."
        },
        {
            question: "What does it use?",
            answer: `The database uses custom embeddings from <a href="https://huggingface.co/Flamenco43/NanoBERT-V2" target="_blank" style="color: #3498db; text-decoration: none;">NanoBERT</a> to resolve similar Nanoscience papers. It leverages the <a href="https://huggingface.co/docs/api-inference/en/index" target="_blank" style="color: #3498db; text-decoration: none;">Hugging Face Inference API</a> and <a href="https://github.com/facebookresearch/faiss" target="_blank" style="color: #3498db; text-decoration: none;">FAISS</a> for a hybrid sparse and dense vector search.`
        },
        {
            question: "What kind of papers are included?",
            answer: "The database includes peer-reviewed papers from the field of nanoscience and nanotechnology. The papers cover various topics including materials science, quantum physics. At the moment, only RSC journals are included."
        },
        {
            question: "How accurate are the search results?",
            answer: "The search results are ranked by semantic similarity, meaning they capture the meaning and context of your query rather than just matching keywords. The distance score shown with each result indicates how closely it matches your query - lower scores indicate better matches."
        },
        {
            question: "Can I access the full papers?",
            answer: "The search provides titles and DOIs (Digital Object Identifiers) for the papers. You can use these DOIs to access the full papers through your institutional subscriptions or the publishers' websites."
        }
    ];

    return React.createElement(
        'div',
        { className: 'faq-container' },
        [
            React.createElement('h1', { className: 'mb-4', key: 'title' }, 'Frequently Asked Questions'),
            React.createElement(
                'div',
                { className: 'faq-list', key: 'list' },
                faqs.map((faq, index) => 
                    React.createElement(
                        'div',
                        { key: index, className: 'faq-item mb-4' },
                        [
                            React.createElement('h2', { className: 'h4 mb-3', key: 'q' }, faq.question),
                            React.createElement('p', { 
                                className: 'text-muted', 
                                key: 'a',
                                dangerouslySetInnerHTML: { __html: faq.answer }
                            })
                        ]
                    )
                )
            )
        ]
    );
}; 