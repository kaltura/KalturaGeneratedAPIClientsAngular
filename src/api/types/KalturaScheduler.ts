
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSchedulerStatus } from './KalturaSchedulerStatus';
import { KalturaSchedulerConfig } from './KalturaSchedulerConfig';
import { KalturaSchedulerWorker } from './KalturaSchedulerWorker';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSchedulerArgs  extends KalturaObjectBaseArgs {
    configuredId? : number;
	name? : string;
	host? : string;
}


export class KalturaScheduler extends KalturaObjectBase {

    readonly id : number;
	configuredId : number;
	name : string;
	host : string;
	readonly statuses : KalturaSchedulerStatus[];
	readonly configs : KalturaSchedulerConfig[];
	readonly workers : KalturaSchedulerWorker[];
	readonly createdAt : Date;
	readonly lastStatus : number;
	readonly lastStatusStr : string;

    constructor(data? : KalturaSchedulerArgs)
    {
        super(data);
        if (typeof this.statuses === 'undefined') this.statuses = [];
		if (typeof this.configs === 'undefined') this.configs = [];
		if (typeof this.workers === 'undefined') this.workers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduler' },
				id : { type : 'n', readOnly : true },
				configuredId : { type : 'n' },
				name : { type : 's' },
				host : { type : 's' },
				statuses : { type : 'a', readOnly : true, subTypeConstructor : KalturaSchedulerStatus, subType : 'KalturaSchedulerStatus' },
				configs : { type : 'a', readOnly : true, subTypeConstructor : KalturaSchedulerConfig, subType : 'KalturaSchedulerConfig' },
				workers : { type : 'a', readOnly : true, subTypeConstructor : KalturaSchedulerWorker, subType : 'KalturaSchedulerWorker' },
				createdAt : { type : 'd', readOnly : true },
				lastStatus : { type : 'n', readOnly : true },
				lastStatusStr : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduler',KalturaScheduler);
