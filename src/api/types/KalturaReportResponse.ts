
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaReportResponseArgs  extends KalturaObjectBaseArgs {
    columns? : string;
	results? : KalturaString[];
}


export class KalturaReportResponse extends KalturaObjectBase {

    columns : string;
	results : KalturaString[];

    constructor(data? : KalturaReportResponseArgs)
    {
        super(data);
        if (typeof this.results === 'undefined') this.results = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReportResponse' },
				columns : { type : 's' },
				results : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaReportResponse',KalturaReportResponse);
