const EventEmitter = require("events");
const REPOSITORY_CHANGE = "REPOSITORY_CHANGE";
import MemoryDB from "./adpter/MemoryDB";
/**
 * @template T
 * @constructor
 */
export default class BaseRepository extends EventEmitter {
    /**
     * @param {string} domainName
     * @param {*} database
     */
    constructor(domainName, database) {
        super();
        /**
         * @type {MemoryDB}
         */
        this._database = database;

        /**
         * @type {string}
         */
        this._name = domainName;
        /**
         * displayName is for debugging
         * @type {string}
         */
        this.displayName = domainName;
    }

    /**
     * @param {string} id
     * @return {T}
     * @private
     */
    _get(id) {
        return this._database.get(`${this._name}.${id}`);
    }

    /**
     * Find domain by domain's `id`
     * @param {string} id
     * @returns {T}
     */
    findById({ id }) {
        return this._get(id);
    }

    /**
     * Return last used domain if it exist.
     * @returns {T|undefined}
     */
    lastUsed() {
        const item = this._database.get(`${this._name}.lastUsed`);
        if (!item) {
            return;
        }
        return this._get(item.id);
    }

    /**
     * Save domain and emit change.
     * @param {T} item
     */
    save(item) {
        this._database.set(`${this._name}.lastUsed`, item);
        this._database.set(`${this._name}.${item.id}`, item);
        this.emit(REPOSITORY_CHANGE, item);
    }

    /**
     * Remove domain from database
     * @param {string} id
     */
    remove({ id }) {
        this._database.delete(`${this._name}.${id}`);
        this.emit(REPOSITORY_CHANGE);
    }

    /**
     * add change handler
     * @param {function} handler
     */
    onChange(handler) {
        this.on(REPOSITORY_CHANGE, handler);
    }
}
