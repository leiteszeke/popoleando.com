// Includes
const seeds = require('./seeds');
const models = require('./models');

const getItem = (model, key, value) =>
    new Promise((resolve, reject) => {
        model.findOne().where({ [key]: value }).exec((err, res) => {
            if (err !== null) return reject(err);
            if (res) return resolve(res);
        });
    })


const parseRelations = async (input) => {
    const relations = {};

    if (input.length === 0) return Promise.resolve({});

    return new Promise(resolve => {
        let index = 0;

        input.forEach(async ({ key, name, model, value }) => {
            const item = await getItem(models[model], key, value);
            relations[name] = item;
            index++;

            if (index >= input.length) {
                return resolve(relations);
            }
        });
    });
}

const create = ({ model, seed }) =>
    seed.map(item =>
        model.deleteMany({}, async () => {
            const toRelate = item.relations || [];
            delete item.relations;
            const relations = await parseRelations(toRelate);
            const modelItem = new model({ ...item, ...relations });
            modelItem.save();
        })
    )

seeds.map(seed => {
    return create(seed);
});