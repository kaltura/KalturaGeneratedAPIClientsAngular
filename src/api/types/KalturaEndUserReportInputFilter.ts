
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaReportInputFilter, KalturaReportInputFilterArgs } from './KalturaReportInputFilter';

export interface KalturaEndUserReportInputFilterArgs  extends KalturaReportInputFilterArgs {
    application? : string;
	userIds? : string;
	playbackContext? : string;
	ancestorPlaybackContext? : string;
}


export class KalturaEndUserReportInputFilter extends KalturaReportInputFilter {

    application : string;
	userIds : string;
	playbackContext : string;
	ancestorPlaybackContext : string;

    constructor(data? : KalturaEndUserReportInputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEndUserReportInputFilter' },
				application : { type : 's' },
				userIds : { type : 's' },
				playbackContext : { type : 's' },
				ancestorPlaybackContext : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEndUserReportInputFilter',KalturaEndUserReportInputFilter);
