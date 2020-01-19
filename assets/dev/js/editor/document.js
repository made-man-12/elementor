import HistoryManager from 'elementor/modules/history/assets/js/history/manager';
import RevisionsManager from 'elementor/modules/history/assets/js/revisions/manager';

class Editor {
	/**
	 * Editor status.
	 *
	 * @type {'open'|'closed'}
	 */
	status = 'closed';

	isSaving = false;

	isChangedDuringSave = false;
}

export default class Document {
	/**
	 * Document id.
	 *
	 * @type {number|null}
	 */
	id = null;

	/**
	 * History of the document.
	 *
	 * @type {HistoryManager}
	 */
	history = null;

	/**
	 * Revisions of the document.
	 *
	 * @type {RevisionsManager}
	 */
	revisions = null;

	/**
	 * Current container.
	 *
	 * @type {Container}
	 */
	container = null;

	/**
	 * Editor Settings.
	 *
	 * @type {Editor}
	 */
	editor = new Editor();

	/**
	 * Function constructor().
	 *
	 * Create document.
	 *
	 * @param {{}} config
	 * @param {Container} container
	 */
	constructor( config ) {
		this.config = config;
		this.id = config.id;

		this.initialize();
	}

	/**
	 * Function initialize().
	 *
	 * Initialize document.
	 */
	initialize() {
		this.history = new HistoryManager();
		this.revisions = new RevisionsManager( this );
	}
}