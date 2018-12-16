import GET_DETAIL_REPOSITORY from '../queries/getDetailRepository';


const detailRepository = (_, { id }, { cache }) => {
    let { detailRepository } = cache.readQuery({
        query: GET_DETAIL_REPOSITORY,
    });

    detailRepository = id;

    cache.writeQuery({
        query: GET_DETAIL_REPOSITORY,
        data: { detailRepository },
    });

    return { id };
};

export default detailRepository;