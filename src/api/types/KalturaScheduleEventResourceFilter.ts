
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEventResourceBaseFilter, KalturaScheduleEventResourceBaseFilterArgs } from './KalturaScheduleEventResourceBaseFilter';

export interface KalturaScheduleEventResourceFilterArgs  extends KalturaScheduleEventResourceBaseFilterArgs {
    eventIdOrItsParentIdEqual? : number;
}


export class KalturaScheduleEventResourceFilter extends KalturaScheduleEventResourceBaseFilter {

    eventIdOrItsParentIdEqual : number;

    constructor(data? : KalturaScheduleEventResourceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduleEventResourceFilter' },
				eventIdOrItsParentIdEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEventResourceFilter',KalturaScheduleEventResourceFilter);
