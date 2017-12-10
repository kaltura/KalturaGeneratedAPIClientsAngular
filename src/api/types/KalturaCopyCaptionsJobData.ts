
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaCopyCaptionsJobDataArgs  extends KalturaJobDataArgs {
    sourceEntryId? : string;
	entryId? : string;
	offset? : number;
	duration? : number;
	fullCopy? : boolean;
}


export class KalturaCopyCaptionsJobData extends KalturaJobData {

    sourceEntryId : string;
	entryId : string;
	offset : number;
	duration : number;
	fullCopy : boolean;

    constructor(data? : KalturaCopyCaptionsJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCopyCaptionsJobData' },
				sourceEntryId : { type : 's' },
				entryId : { type : 's' },
				offset : { type : 'n' },
				duration : { type : 'n' },
				fullCopy : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCopyCaptionsJobData',KalturaCopyCaptionsJobData);
