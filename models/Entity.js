

const entitySchema = {
    "id": {
        type: String,
        required: true
    },
    "schema": {
        type: String
    },
    "properties":{
        "full":{
            type: [Address],
            required: true
        }
    },
    "referents":[],
    "datasets": {
        type: Array,
        required: true
    },
    "first_seen": {
        type: Date,
        required: true
    },
    "last_seen": {
        type: Date,
        required: true
    },
    "caption": {
        type: String
    },
    "target": {
        type: Boolean,
        required: true
    },
}