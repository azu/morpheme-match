// LICENSE : MIT
"use strict";
const EventEmitter = require("events");
const REPOSITORY_CHANGE = "REPOSITORY_CHANGE";
import MemoryDB from "./adpter/MemoryDB";
import BaseRepository from "./BaseRepository";
import Analyzer from "../../domain/analyzer/Analyzer";
export class AnalyzedRepository extends BaseRepository {
    constructor() {
        super("Analyzer", new MemoryDB());
    }
}
// Singleton
/** @type {BaseRepository.<Analyzer>} */
const repository = new AnalyzedRepository();
export default repository;