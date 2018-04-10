
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaClipDescription } from './KalturaClipDescription';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaCopyCaptionsJobDataArgs  extends KalturaJobDataArgs {
    entryId? : string;
	clipsDescriptionArray? : KalturaClipDescription[];
	fullCopy? : boolean;
}


export class KalturaCopyCaptionsJobData extends KalturaJobData {

    entryId : string;
	clipsDescriptionArray : KalturaClipDescription[];
	fullCopy : boolean;

    constructor(data? : KalturaCopyCaptionsJobDataArgs)
    {
        super(data);
        if (typeof this.clipsDescriptionArray === 'undefined') this.clipsDescriptionArray = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCopyCaptionsJobData' },
				entryId : { type : 's' },
				clipsDescriptionArray : { type : 'a', subTypeConstructor : KalturaClipDescription, subType : 'KalturaClipDescription' },
				fullCopy : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCopyCaptionsJobData',KalturaCopyCaptionsJobData);
